import { Pattern, RegisterPattern } from "../../Pattern"

RegisterPattern(Pattern.ParsePatFile(`
*BOXJOIN-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,13.97,25.4,25.4,7.62,-17.78
270,21.590000254,21.59,25.4,25.4,7.62,-17.78
0,13.970000254,21.59,0,25.4,7.62,-17.78
180,3.810000254,13.97,0,25.4,7.62,-17.78
90,3.810000254,3.81,25.4,25.4,7.62,-17.78
180,11.430000254,3.81,0,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,7.62,-17.78
270,21.590000254,11.43,25.4,25.4,7.62,-17.78
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
0,3.810000254,21.59,0,25.4,7.62,-17.78
`))
