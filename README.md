
# Tax Code

Small JS function that calculate Italian tax code.

Parameters to insert in the function (in the following order):
```
- LAST NAME

- FIRST NAME

- GENDER (m o f)

- BIRTHPLACE

- DAY OF BIRTH

- MONTH OF BIRTH (numeric form ex: 3)

- YEAR OF BIRTH (extended form ex: 2022)
```
<br></br>

Insert example (for peole born in Italy):
```
CodiceFiscale("rossi", "mario", "m", "milano", "11", "4", "1997");
```
Result example:
```
RSSMRA97D11F205N
```
<br></br>

Insert example (for people born abroad):
```
CodiceFiscale("rossi", "mario", "m", "francia", "11", "4", "1997");
```
Result example:
```
RSSMRA97D11Z110R
```
<br></br>
**-Added support for the calculation of tax codes for the population born abroad.**

**-Removed the ```provincia``` parameter because it is not needed to calculate the tax code.**

**-JSON files may be incomplete, even in small municipalities and countries.**
