## Fabien_api
### RESTFull api using Node.js, Express.js and mongoDB

![image](https://user-images.githubusercontent.com/38925672/197445009-67e18dbe-e0e4-443a-ac3f-ad2d1e7d1922.png)

### command
    db.users.insertMany([
        {
            id_user: 1010, 
            name: "Fab Doe", 
            username: "Fd000", 
            address: {
                number: 100, 
                street: "my street", 
                city: "Hanoi", 
                country: "vietnam"
            }, 
            email: "nothing@gmail.com",  
            phone: "+841111111111", 
            website: "flk.me",
			createAt: new Date(),
			updateAt: new Date()
        },
        {
            id_user: 1011, 
            name: "LoosDoe", 
            username: "ldoe", 
            address: {
                number: 150, 
                street: "the street", 
                city: "Da nang", 
                country: "vietnam"
            }, 
            email: "fake@gmail.com",
            phone: "+84000000000", 
            website: "flk.com",
			createAt: new Date(),
			updateAt: new Date()
        }])