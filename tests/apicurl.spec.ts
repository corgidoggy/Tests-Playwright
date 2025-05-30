import { test, expect } from '@playwright/test';

test('Withdraw API - Extract transaction_id', async ({ request }) => {
  const url = 'https://finova-gateway-sit.ttbbank.local/v1/api/branch-api/withdraw/saving/confirmation';

  const response = await request.post(url, {
    headers: {
      'accept': 'application/json',
      'user-id': '90458',
      'Content-Type': 'application/json',
    },
    data: {
      withdraw_account_no: "00000012002275",
      withdraw_account_control: "0011000100010200",
      withdraw_amount: 1000.00,
      fee_amount: 500.00,
      override_user_id: "90458",
      waived_fee_reason: "ลูกค้าขอ waive",
      self_transaction: "1"
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.is_success).toBe(true);
  console.log('Response Body:', body);

  const transactionId = body.data.transaction_id;
  console.log('Transaction ID:', transactionId);
});

