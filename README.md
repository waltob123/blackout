# **Blackout Plugin**

## How to use Blackout Plugin
1. Add the script to your html file.
2. Add this function to your JavaScript file ***init()***
3. This function takes a configurations object as an argument.
4. If none is provided it uses the default configurations.

**NB** This plugin autodetects the time of day and set the mode. The time threshold for switching is 17hrs. Meaning When it's 17hrs it automatically switches to dark mode.
#
## Configurations Object Prototype

Configurations
```
const configurations = {
    dayTextColor: **your day text color here**,
    nightTextColor: **your night text color here**,
    dayBgColor: **your day background color here**,
    nightBgColor: **your night background color here**
}
```

## Author
#
This plugin was authored by Desmond Asiedu Asamoah

## Social Media Links
[Github](https://github.com/waltob123)
[Twitter](https://twitter.com/kwasiAsamoah_)