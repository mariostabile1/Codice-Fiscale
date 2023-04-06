
# Fiscal Code

Small JS function that calculate Italian fiscal code.

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

```
Insert example (for peole born in Italy):
CodiceFiscale("rossi", "mario", "m", "milano", "11", "4", "1997");

Result example:
RSSMRA97D11F205N
```

```
Insert example (for people born abroad):
CodiceFiscale("rossi", "mario", "m", "francia", "11", "4", "1997");

Result example:
RSSMRA97D11Z110R
```

**-Added support for the calculation of tax codes for the population born abroad.**

**-Removed parameter "provincia" becouse, useless for the fiscal code calculation**

**-JSON files may not be complete even in the smallest municipalities or  nations.**
