import { faker } from '@faker-js/faker';
/**
 * Generate fake user details
 */

const fullName = faker.person.fullName();                    
const email = faker.internet.email({ name: fullName });      
const phone = faker.phone.number();                          


/**
 * Generate fake address
 */
const address = {
    street: faker.location.streetAddress(),                 
    city: faker.location.city(),                             
    state: faker.location.state(),                           
    country: faker.location.country(),                       
    zip: faker.location.zipCode()                            
};

/**
 * Export the necessary details inorder to use it during payment of an order
 */

export const fakeUser = {
    fullName,
    email,
    address,
    phone
  
};
