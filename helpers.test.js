describe("Payment Helper Functions", function() {
    let allPayments;
  
    beforeEach(function() {
      allPayments = {
        payment1: {
          billAmt: '50',
          tipAmt: '10',
          tipPercent: 20
        },
        payment2: {
          billAmt: '60',
          tipAmt: '12',
          tipPercent: 20
        }
      };
    });
    
    it("should sum the total of 'tipAmt' from allPayments objects", function() {
      const total = sumPaymentTotal('tipAmt');
  
      expect(total).toEqual(22);
    });
  
    it("should sum the total of 'billAmt' from allPayments objects", function() {
      const total = sumPaymentTotal('billAmt');
  
      expect(total).toEqual(110);
    });
  
    it("should calculate the tip percent correctly", function() {
      const billAmt = 60;
      const tipAmt = 12;
      const tipPercent = calculateTipPercent(billAmt, tipAmt);
  
      expect(tipPercent).toEqual(20);
    });
  
    it("should append a new td element with the given value to a table row", function() {
      const tr = document.createElement('tr');
      const value = '$50';
  
      appendTd(tr, value);
  
      expect(tr.children.length).toEqual(1);
      expect(tr.innerHTML).toContain('$50');
    });
  });
  