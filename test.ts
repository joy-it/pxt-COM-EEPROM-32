// Write "12345 to address 5 on EEPROM - then read from eeprom
COMEEPROM32.eepromWrite(12345, 5)
let eepromValue = COMEEPROM32.eepromRead(5)