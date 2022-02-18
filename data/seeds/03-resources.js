// DO NOT CHANGE THIS FILE
const resources = [
    { resource_name: 'hello', resource_description: 'just a hello'},
    { resource_name: 'hungry dog', resource_description: 'nothing much'},
    { resource_name: 'eminem', resource_description: 'marshall mathers'}
  ]
  
  exports.resources = resources
  
  exports.seed = function (knex) {
    return knex('resources').insert(resources)
  }
  

//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional