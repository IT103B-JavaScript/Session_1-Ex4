let partyHost = "Nguyen Van A";
let venueCost  = 2000000;
let foodCostPerGuest  = 200000;
let guestCount  = 15;
let drinkCost = 1500000;
let decorCost = 800000;
let targetBudget = 40000000;

let foodTotal = foodCostPerGuest * guestCount;
let totalPartyCost = venueCost + foodTotal + drinkCost + decorCost;
let costPerGuest = totalPartyCost / guestCount;
let budgetVariance = targetBudget - totalPartyCost;

console.log("Thông tin và Chi phí tiệc")
console.log(`___Thông tin___`)
console.log(`Chủ tiệc: ${partyHost}`)
console.log(`Số lượng khách mời: ${guestCount}`)
console.log(`___Chi phí___`)
console.log(`1. Tiền thuê địa điểm tổ chức:${venueCost}`)
console.log(`2. Đơn giá mỗi suất ăn: ${foodCostPerGuest}`)
console.log(`3. Chi phí đồ uống: ${drinkCost}`)
console.log(`4. Phí trang trí và bánh kem: ${decorCost}`)
console.log(`___Chi phí dự đoán___`)
console.log(`1. Tổng tiền đồ ăn: ${foodTotal}`)
console.log(`2. Tổng chi phí toàn bộ: ${totalPartyCost}`)
console.log(`3. Chi phí bình quân trên mỗi khách mời: ${costPerGuest}`)
console.log(`4. Chênh lệch so với ngân sách chuẩn bị: ${budgetVariance}`)