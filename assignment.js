// 1.Kilometer to Meter Converter;
function kilometerToMeter(kilometers) {
  //acceptance
  if (kilometers == null) return "Value can't be null";
  if (kilometers < 0 || typeof kilometers != "number")
    return "Unexpected value";

  // value in meter
  return kilometers * 1000;
}

//2. Budget Calculator
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
  const watchPrice = 50;
  const phonePrice = 100;
  const laptopPrice = 500;

  //acceptance
  if (numberOfWatch == null || numberOfPhone == null || numberOfLaptop == null)
    return "Values can't be null";

  if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0)
    return "Amount of products can't be negative";

  if (
    numberOfWatch % 1 != 0 ||
    numberOfPhone % 1 != 0 ||
    numberOfLaptop % 1 != 0
  )
    return "All values should be integer";

  //total cost
  return (
    watchPrice * numberOfWatch +
    phonePrice * numberOfPhone +
    laptopPrice * numberOfLaptop
  );
}

// 3. hotel cost
function hotelCost(numberOfDays) {
  // acceptance
  if (numberOfDays == null) return "Values can't be null";
  if (numberOfDays < 0 || typeof numberOfDays != "number")
    return "Unexpected value";

  var totalCost = 0;
  var firstTenDaysCost = 0;
  var secondTenDaysCost = 0;
  var remaining = 0;

  if (numberOfDays <= 10) {
    totalCost = numberOfDays * 100; //cost for 1st ten days
  } else if (numberOfDays <= 20) {
    firstTenDaysCost = 10 * 100;
    remaining = (numberOfDays - 10) * 80;
    totalCost = firstTenDaysCost + remaining; //cost for second ten days
  } else {
    firstTenDaysCost = 10 * 100;
    secondTenDaysCost = 10 * 80;
    remaining = numberOfDays - 20;
    totalCost = firstTenDaysCost + secondTenDaysCost + remaining * 50; //cost for more then 20 days
  }
  return totalCost;
}

// 4. Maximum
function megaFriend(numberOfFriendsName) {
  if (numberOfFriendsName.length <= 0) return "Length can't be 0 or negative";
  var maxLength = numberOfFriendsName[0];
  for (var i = 1; i < numberOfFriendsName.length; i++) {
    element = numberOfFriendsName[i];

    if (element.length > maxLength.length) {
      maxLength = element;
    }
  }
  // return max length of element
  return maxLength;
}

