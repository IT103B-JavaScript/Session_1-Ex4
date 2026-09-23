Bảng mô tả chi tiết:

|Tên biến|Kiểu dữ liệu|Đơn vị|Giá trị|Ý nghĩa|
|---|---|---|---|---|
|partyHost|String|Người|Nguyen Van A|Tên chủ nhân buổi tiệc|
|venueCost |Number|VND|2000000|Phí thuê địa điểm|
|foodCostPerGuest |Number|VND|200000|Đơn giá mỗi suất ăn|
|guestCount |Number|Người|15|Số lượng khách mời|
|drinkCost |Number|VND|1500000|Chi phí đồ uống|
|decorCost |Number|VND|800000|Chi phí trang trí và bánh kem|
|targetBudget|Number|VND|40000000|Ngân sách|
|foodTotal|Number|VND|3000000|Tổng tiền đồ ăn|
|totalPartyCost|Number|VND|7300000|Chi phí toàn bộ|
|costPerGuest |Number|VND|486666.6666666667|Chi phí bình quân/người|
|budgetVariance |Number|VND|32700000|Chi phí chênh lệch so với ngân sách|
|---|---|---|---|---|

Các công thức tính toán:

Tổng tiền đồ ăn: foodTotal = foodCostPerGuest * guestCount.

Tổng chi phí toàn bộ sự kiện: totalPartyCost = venueCost + foodTotal + drinkCost + decorCost.

Chi phí bình quân trên mỗi khách mời: costPerGuest = totalPartyCost / guestCount.

Chênh lệch so với ngân sách chuẩn bị: budgetVariance = targetBudget - totalPartyCost

Bảng test case:

|Trường hợp|Thay đổi số lượng khách|Thay đổi ngân sách|Ý nghĩa|
|---|---|---|---|
|foodTotal|7400000|3000000|Tổng tiền đồ ăn|
|totalPartyCost|11700000|7300000|Tổng chi phí toàn bộ sự kiện|
|costPerGuest|316216,22|486666,67|Chi phí bình quân trên mỗi khách mời|
|budgetVariance| 28300000|12700000|Chênh lệch so với ngân sách chuẩn bị|
|---|---|---|---|