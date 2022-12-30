# Fiscal Code
Small JS function that calculate Italian fiscal code.

Parameters to insert in the function (in the following order): 
```
- LAST NAME
- FIRST NAME
- GENDER (m o f)
- BIRTHPLACE
- PROVINCE (standard format ex: RO, TP, ...)
- DAY OF BIRTH
- MONTH OF BIRTH (numeric form ex: 3)
- YEAR OF BIRTH (extended form ex: 2022)
```

Insert example: 
CodiceFiscale("rossi", "mario", "m", "milano", "mi", "11", "4", "1997");

Result example:
RSSMRA97D11F205N

**PS: The function don't support fiscal code calculation for people born outside Italy.**
    **JSON file may not be complete even in the smallest municipalities.**
