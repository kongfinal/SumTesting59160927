const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', function() {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21',function(){
  expect(sum(20,1)).toBe(21);
});
// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ ?',function(){
  expect(sum(2,5)).toBe(7);
});


// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('2 + 6 เท่ากับ 8',function(){
  expect(sum(2,6)).toBe(8);
});

test('4 + 9 เท่ากับ 13',function(){
  expect(sum(4,9)).toBe(13);
});

test('7 + 0 เท่ากับ 7',function(){
  expect(sum(7,0)).toBe(7);
});