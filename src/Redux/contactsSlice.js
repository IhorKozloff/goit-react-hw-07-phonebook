import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({

    reducerPath: 'contactsApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://62860485f0e8f0bb7c0e5d72.mockapi.io' }),

    tagTypes: ['Contact'],

    endpoints: (builder) => ({

      getContacts: builder.query({
        query: () => `/contacts`,
        providesTags: ['Contact'],
      }),

      addContact: builder.mutation({
          query: values => ({
              url: '/contacts',
              method: 'POST',
              body: values,
          }),
          invalidatesTags: ['Contact']
      }),

      removeContact: builder.mutation({
        query: id => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact']
    }),
    }),
  })

  export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi;