const path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions:{
    includePahts : [path.join(__dirname, 'styles/scss')]
  },
  images:{
    domains : ['links.papareact.com','jsonkeeper.com'],
  },
  env:{
    mapbox_key: "pk.eyJ1IjoiZ21rcm93ZHkiLCJhIjoiY2t0amt5OThwMWQwbDJwbXJ4bW00Y25uNiJ9.h6DOHbnALNwMRKh_CgkaOA"
  }

}
