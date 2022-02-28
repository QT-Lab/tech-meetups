import requests
import unittest


class APITest(unittest.TestCase):

    def test_pork_bbq_order(self):
        pork = {'type': 'pork'}
        resp = requests.get('http://localhost:8088/bbq', params=pork)

        self.assertEqual(resp.text, '4')

    def test_chicken_bbq_order(self):
        chicken = {'type': 'chicken'}
        resp = requests.get('http://localhost:8088/bbq', params=chicken)

        self.assertEqual(resp.text, '2324')


if __name__ == '__main__':
    unittest.main()
