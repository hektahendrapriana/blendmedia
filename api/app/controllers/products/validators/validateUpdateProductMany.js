const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates update item request
 */
const validateUpdateProductMany = [
  check('sku')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
    check('product_name')
      .exists()
      .withMessage('MISSING')
      .not()
      .isEmpty()
      .withMessage('IS_EMPTY')
      .trim(),
    check('product_price')
      .exists()
      .withMessage('MISSING')
      .not()
      .isEmpty()
      .withMessage('IS_EMPTY')
      .trim(),
    check('brand')
      .exists()
      .withMessage('MISSING')
      .not()
      .isEmpty()
      .withMessage('IS_EMPTY')
      .trim(),
  check('product_image_url'),
  check('product_info'),
  check('product_type')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isIn(['IPHONE', 'IPAD', 'MAC', 'WATCH', 'ACCESORIES', 'TV'])
    .withMessage('PRODUCT_TYPE_NOT_IN_KNOWN_SOURCE'),
  check('real_pdp_url'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateProductMany }
