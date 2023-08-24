# MakeCode Package for the Joy-IT COM-EEPROM-32

This library provides a Microsoft Makecode package for the Joy-IT COM-EEPROM-32. See https://joy-it.net/products/COM-EEPROM-32 for more details.

## Overview

This EEPROM memory allows you to store and read data externally via the I2C interface of your microcontroller.

## Connection

|      COM-EEPROM-32       |               Micro:Bit            |
|:------------------------:|:----------------------------------:|
| VCC                      | 3,3 V                              |
| SCL                      | P19 (SCL)                          |
| SDA                      | P20 (SDA)                          |
| GND                      | GND                                |

## Example

### Write data

You can write up to 32 kB of data to the EEPROM by using the **COMEEPROM32.eepromWrite(data, address)** function. Both parameters, **data** and **address**, need to be a number.

```typescript
// Write number 12345 to address 5
COMEEPROM32.eepromWrite(12345, 5);
```

### Read data

Data can be read out by using the **COMEEPROM32.eepromRead(address)** function.

```typescript
// Read data from address 5
COMEEPROM32.eepromRead(5)
```