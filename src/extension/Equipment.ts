interface Equipment{
    name: string,
    armour: number,
}

class Gloves implements Equipment{
    name = 'Glove'
    armour = 2
}

class Helmet implements Equipment{
    name = "Helmet";
    armour = 3;
}

class Shield implements Equipment{
    name = "Shield"
    armour = 4;
}