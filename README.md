Api endpoints: \n
signup:->  (POST) /register
login:->   (POST) /login
logout:->  (GET) /logout
home ->   (GET) /home (if user has signed in)
viewall products:->  /products
view a specific product:-> (GET,PUT,DELETE) /products/:Id
Add to cart :-> (GET,POST,DELETE) /products/addCart/:Id
view,post,delte all products of a category:-> (GET,POST,PUT,DELETE) /category/:categoryId
