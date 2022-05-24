var strsum = prompt ('შეიყვანეთ ანაბრის თანხა', 1000)
var strpercent = prompt ('შეიყვანეთ საპროცენტო განაკვეთი', 10)
var sum = parseint(strsum);
var percent = parseint(strpercent);

sum = sum + sum * percent/100;
alert('პროცენტის დარიცხვის შემდეგ ანაბრის თანხა იქნება' +sum)
