FROM node:12.18-alpine

# Set the working directory
WORKDIR /go/src/github.com/nguyenbt456/floating-messenger-demo/src

# Copy app dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install --no-optional

# Bundle app source
COPY . .

# Run app on port 9990
EXPOSE 9990

# Define runtime
CMD ["node", "app.js"]