export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type:'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type:'string',
    },
    {
      name: 'address',
      title: 'Address',
      type:'string',
    },
    {
      name: 'city',
      title: 'City',
      type:'string',
    },
    {
      name: 'zipCode',
      title: 'ZipCode',
      type:'string',
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type:'string',
    },
    {
      name: 'email',
      title: 'Email',
      type:'string',
    },
    {
    name : 'cartItems',
    title: 'CartItems',
    type: 'array',
    of: [{type: 'reference', to: {type: 'product'}}]
  },
  {
    name: 'total',
    title: 'Total',
    type: 'number',
  },
  {
    name: 'status',
    title: 'Status',
    type:'string',
    options: {
      list: [
        {title: 'Pending', value: 'pending'},
        {title: 'Success', value: 'success'},
        {title: 'Dispatch', value:'dispatch'},
      ],
      layout: 'radio',  //optionally , change to dropdown if you prefer a dropdown 
    },
    initialValue: 'pending', //Default value
  }
  ]
}