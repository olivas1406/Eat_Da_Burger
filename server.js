var express = require("express");

var bodyParser = require("body-parser");

var orm = require("./config.orm.js")

orm.selectAll("*", "burger_name");

orm.insertOne("burgers", "    ");

orm.updateOne("id", "burger_name", "    ");


