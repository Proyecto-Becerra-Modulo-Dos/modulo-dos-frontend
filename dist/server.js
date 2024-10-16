"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _index = _interopRequireDefault(require("./routes/index.js"));
(0, _dotenv.config)();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var app = (0, _express["default"])();
app.set("view engine", "ejs");
app.use(_express["default"]["static"](_path["default"].join(_dirname, "public")));
app.set("views", _path["default"].join(_dirname, "views"));
app.set("port", process.env.PORT || 3000);
app.use("/", _index["default"]);

// app.use("/", (req, res) => {
//     res.render("views.error.ejs");
// });
var _default = exports["default"] = app;