describe("Payment Functions", function() {
    let billAmtInput, tipAmtInput, paymentForm, paymentTbody, summaryTds;
  
    beforeEach(function() {
      billAmtInput = document.createElement('input');
      billAmtInput.id = 'billAmt';
      tipAmtInput = document.createElement('input');
      tipAmtInput.id = 'tipAmt';
      paymentForm = document.createElement('form');
      paymentForm.id = 'paymentForm';
      paymentTbody = document.createElement('tbody');
      paymentTbody.id = 'paymentTable';
      summaryTds = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td')
      ];
  
      document.body.appendChild(billAmtInput);
      document.body.appendChild(tipAmtInput);
      document.body.appendChild(paymentForm);
      document.body.appendChild(paymentTbody);
    });
  
    afterEach(function() {
      document.body.removeChild(billAmtInput);
      document.body.removeChild(tipAmtInput);
      document.body.removeChild(paymentForm);
      document.body.removeChild(paymentTbody);
    });
  
    it("should create a payment object with valid input", function() {
      billAmtInput.value = '50';
      tipAmtInput.value = '10';
  
      const curPayment = createCurPayment();
  
      expect(curPayment).toEqual({
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20
      });
    });
  
    it("should append a new row to the payment table", function() {
      const curPayment = {
        billAmt: '60',
        tipAmt: '12',
        tipPercent: 20
      };
  
      appendPaymentTable(curPayment);
  
      const paymentRow = document.querySelector('#paymentTable tr');
      expect(paymentRow).toBeTruthy();
      expect(paymentRow.innerHTML).toContain('$60');
      expect(paymentRow.innerHTML).toContain('$12');
      expect(paymentRow.innerHTML).toContain('20%');
    });
  
    it("should update the summary table with the correct values", function() {
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
  
      updateSummary();
  
      expect(summaryTds[0].innerHTML).toEqual('$110');
      expect(summaryTds[1].innerHTML).toEqual('$22');
      expect(summaryTds[2].innerHTML).toEqual('20%');
    });
  });
  