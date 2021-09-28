const {Builder, By, Key, util} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const clipboardy = require('clipboardy');
const fs = require("fs");

function delay(t, v) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    });
 }
 
 Promise.prototype.delay = function(t) {
     return this.then(function(v) {
         return delay(t, v);
     });
 }


async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("url")
    await driver.findElement(By.name('log')).sendKeys('user');
    await driver.findElement(By.name('pwd')).sendKeys('password', Key.ENTER);

await driver.get("url");
      await driver.findElement(By.css('.ace_content')).then((thisa) => {
      return delay(9000).then(function(){
      return thisa.click()
      }) 
  }).catch(err=>{console.log(err)});
      await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
      await driver.actions().keyDown(Key.CONTROL).sendKeys('c').perform();
    
      const all_css = clipboardy.readSync();
      fs.writeFile("stylesheet.css", all_css, (err)=>{console.log(err)});

    await driver.get("url")
      await driver.findElement(By.css('.ace_print_margin_layer')).then((thisa) => {
        return delay(9000).then(function(){
        return thisa.click()
         }) 
     }).catch(err=>{console.log(err)});
        await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
        await driver.actions().keyDown(Key.CONTROL).sendKeys('c').perform();
      
         const all_js = clipboardy.readSync();
         fs.writeFile("scripts.js", all_js, (err)=>{console.log(err)});
         //driver.manage().getTimeouts().setScriptTimeout(5, TimeUnit.SECONDS);
         await driver.close();
    }

example();  

