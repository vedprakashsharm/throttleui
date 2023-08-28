//import ceil from 'lodash/ceil'

import get from 'lodash/get'
import values from 'lodash/values'
import ceil from 'lodash/ceil'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//import md5 from 'md5'

export const toWords = (value, currencyType) => {
  if (Number.isNaN(value) || !/^\d+$/.test(value)) {
    return value
  }

  // let value = valueInPaisa
  if (value >= 10000000) {
    value = ceil(value / 10000000, 2) + ' Cr'
  } else if (value >= 100000) {
    value = ceil(value / 100000, 2) + ' Lac'
  } else if (value >= 1000) {
    value = ceil(value / 1000, 2) + ' K'
  }

  const currency = getCurrencySymbol(currencyType)

  return `${currency} ${value}`
}

export const getCurrencySymbol = currencyType => {
  let currency = currencyType || ''
  if (currencyType === 'INR') {
    currency = '₹'
  } else if (currencyType === 'USD') {
    currency = '$'
  }

  return currency
}

export const handleErrorResponse = (error) => {
  if (error.response) {
    const errors = values(get(error, 'response.data.errors'))
    if (errors && errors.length > 0) {
      errors.forEach((message) =>
        toast.error(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          icon: false,
          progress: undefined,
          closeButton: false,
          progressStyle: { background: '#d3a41e' },
          theme: 'dark',
          style: { color: '#d3a41e', borderRadius: '10px' },
        })
      )
    } else if (error.status === 403) {
      Navigate('/?login=true', { state: { path: window.location.pathname } })
    } else {
      toast(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        closeButton: false,
        icon: false,
        progress: undefined,
        progressStyle: { background: '#d3a41e' },
        theme: 'dark',
        style: { color: '#d3a41e', borderRadius: '10px' },
      })
    }
  } else {
    toast(error.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      icon: false,
      closeButton: false,
      progress: undefined,
      progressStyle: { background: '#d3a41e' },
      theme: 'dark',
      style: { color: '#d3a41e', borderRadius: '10px' },
    })
  }
}

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  // style: 'currency',
  // currency: 'INR',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export const formatTextToCurrency = value => currencyFormatter.format(value)

export const formatCurrencyToText = (value = '') => parseFloat(value.replace(/[^0-9.]/g, ''))

export const toRupees = (amount) => amount / 100

export const toPaisa = (amount) => amount * 100

export const toDateString = value => {
  try {
    if (value && value.length > 0) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date.toLocaleString('en-us', {year: 'numeric', month: 'short', day: '2-digit'}).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
      }
    }

    return '-'
  } catch {
    return '-'
  }
}

