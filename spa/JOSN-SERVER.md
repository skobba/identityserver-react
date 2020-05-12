# Install
npm install -D json-server json-server-auth

# Run
json-server db.json -m ./node_modules/json-server-auth -r routes.json

# Register
curl -d '{
  "email": "demo@example.com",
  "password": "demo"
}' -H 'Content-Type: application/json' http://localhost:3000/register

# Login
curl -d '{
  "email": "demo@example.com",
  "password": "demo"
}' -H 'Content-Type: application/json' http://localhost:3000/login

# Routes
routes.json:
{
    "/persons*": "/664/persons$1",
    "/messages*": "/640/messages$1"
}