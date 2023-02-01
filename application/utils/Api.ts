import Router from 'next/router'
import { AxiosResponse, AxiosError } from 'axios'
import {
  JobListDocument,
  MetadataFieldDocument,
  CollectionListDocument,
} from '@vidispine/types'

export type ApiResponse = AxiosResponse
export type ApiError = AxiosError
export type JobApiResponse = AxiosResponse<JobListDocument>
export type FieldApiResponse = AxiosResponse<MetadataFieldDocument>
export type CollectionListResponse = AxiosResponse<CollectionListDocument>

export class Api {
  protected static async callApi(apiFn: Function, params = {}) {
    try {
      const response = await apiFn(params)
      return response
    } catch (err) {
      const error = err as ApiError
      console.error(error.response?.status)
      throw error
    }
  }

  static fetch(apiFn: Function, params = {}) {
    return new Promise<ApiResponse>((resolve, reject) => {
      Api.callApi(apiFn, params)
        .then((response: ApiResponse) => {
          resolve(response)
        })
        .catch((e: ApiError) => {
          if (e.response?.status == 403) {
            Router.push('/404')
          }

          if (e.response?.status == 401) {
            Router.push('/login')
          }

          reject(e)
        })
    })
  }
}

export default Api
