  function order() {
            var selectedItems = [];
            var totalPrice = 0;
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
            
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    var price = parseFloat(checkbox.value);
                    selectedItems.push(checkbox.nextElementSibling.textContent);
                    totalPrice += price;
                }
            });

            if (selectedItems.length > 0) {
                alert('You have ordered:\n' + selectedItems.join('\n') + '\nTotal Price: $' + totalPrice.toFixed(2));
            } else {
                alert('Please select at least one item from the menu.');
            }
        }