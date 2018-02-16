import axios from 'axios'
import toastr from 'toastr'
import _ from 'lodash'

const request = async (options) => {
  const {
    onRequest, onSuccess, onFailure, errorMessage, successMessage, ...reqParams
  } = options

  const defaults = {} // if default parameters need to be added

  if (!options.method || !options.url) {
    const error = { message: 'method and url are required parameters, please provide.'}
    if (_.isFunction(onFailure)) {
      onFailure(error)
    }

    toastr.error(errorMessage || 'Required request parameter is missing.')

    return error
  }

  const requestParams = Object.assign({}, defaults, {...reqParams})

  if (_.isFunction(onRequest)) onRequest()

  try {
    const result = await axios(requestParams)

    toastr.success(successMessage || 'Request completed.')

    if (_.isFunction(onSuccess)) onSuccess(result)

    return result
  } catch(err) {
    toastr.error(errorMessage || err.message)

    if (_.isFunction(onFailure)) onFailure(err)

    return err
  }
}

export default request
