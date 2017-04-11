[![Dependency Status](https://david-dm.org/dnode/dhandler/status.svg)](https://david-dm.org/dnode/dhandler)
[![devDependency Status](https://david-dm.org/dnode/dhandler/dev-status.svg)](https://david-dm.org/dnode/dhandler?type=dev)

# Installation

`npm i --save dhandler`


# Initialisation

```
const dhandler = require('dhandler');

app.get('/', dhandler(async (req, res) => {
  res.send();
}));
```
