const User = require('../../models/user')
const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getUsers = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, User, query, { path: 'role_id createdBy modifiedBy', select: 'name role first_degree degree bio first_name middle_name last_name nik user_name email' }))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getUsers }