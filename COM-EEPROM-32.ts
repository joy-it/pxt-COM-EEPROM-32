//% color="#275C6B" weight=100 icon="\uf2db" block="COM-EEPROM-32"
namespace COMEEPROM32 {
    let eepromADDR = 0x50;

    /**
     * Writes data to the EEPROM storage
     * @param data The data that is supposed to be written
     * @param address The address of the EEPROM where the data is supposed to be stored
     */
    //% block="write %dat to EEPROM address %addr"
    //% weight=100
    export function eepromWrite(data: number, address: number): void {
        let buf = pins.createBuffer(3);

        buf[0] = address >> 8;
        buf[1] = (address & 0xFF);
        buf[2] = data;
        pins.i2cWriteBuffer(eepromADDR, buf)
    }

    /**
     * Reads data from the EEPROM storage
     * @param address The address of the EEPROM where the data is supposed to be read from
     */
    //% block="read byte from EEPROM address %addr"
    //% weight=99
    export function eepromRead(address: number): number {
        pins.i2cWriteNumber(eepromADDR, address, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(eepromADDR, NumberFormat.UInt8BE);
    }


}