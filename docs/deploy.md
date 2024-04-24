# Deployment

### Express.js
`server.js` should be placed in the root directory of the project.

```js
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use("/", express.static("public"));
app.use("/static", express.static("dist"));

app.get("/*", async (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
```

### Nginx
This is the necessary configuration. You can change the `listen` directive to your desired port.
```nginx
events {}

http {
    include mime.types;

    server {
        listen 8080;

        location / {
            root "C:\Path\To\Public\Folder";
            try_files $uri /index.html;
        }

        location /static {
            alias "C:\Path\To\Dist\Folder";
        }
    }
}
```