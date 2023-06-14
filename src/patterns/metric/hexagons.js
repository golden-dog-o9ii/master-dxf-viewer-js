import { Pattern, RegisterPattern } from "../../Pattern"

RegisterPattern(Pattern.ParsePatFile(`
*HEXAGONS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
239.931417,5.587999746,25.399999492,204.778078632,1.15693825,5.576441984,-552.067817376
239.931417,22.606,4.826,204.778078632,1.15693825,5.576441984,-552.067817376
300.068583,19.812000254,25.399999492,352.866180728,1.15693825,5.576441984,-552.067817376
60.068488,3.048,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
119.931512,7.874,4.318,762.42292397,0.667036766,9.67203171,-957.531152498
300.068583,2.794,4.826,352.866180728,1.15693825,5.576441984,-552.067817376
180,2.794,4.826,0,25.4,5.587998984,-19.812001016
299.931512,17.526,21.082,762.42292397,0.667036766,9.67203171,-957.531152498
0,7.874,21.082,0,25.4,9.652,-15.748
180,17.526,4.318,0,25.4,9.652,-15.748
240.068488,22.352,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
180,2.794,20.574,0,25.4,5.587998984,-19.812001016
`))
