var largestTimeFromDigits = function(A) {
  let time = A[0].toString() + A[1] + '.' + A[2] + A[3];
  if(time > -1 && time < 24.00) {
    return time.toString().replace('.', ':');
  } else {
    return '';
  }
};

module.exports = largestTimeFromDigits;


// using namespace std;
// class Solution {
// public:
//    void dfs(vector<int>& A, string& res, string& cur) {
//       if (cur.size() == 5) {
//          if (isValid(cur) && cur > res)
//             res = cur;
//             return;
//          }
//          for (int i = 0; i < 4; ++i) {
//             if (A[i] != -1) {
//                int tmp = A[i];
//                cur += A[i] + '0';
//             if (cur.size() == 2)
//                cur += ':';
//                A[i] = -1;
//                dfs(A, res, cur);
//                A[i] = tmp;
//                cur.pop_back();
//                if (cur.size() == 2)
//                   cur.pop_back();
//             }
//          }
//    }
//    bool isValid(const string a) {
//       if (a[0] > '2')
//          return false;
//          if (a[0] == '2' && a[1] > '3')
//             return false;
//          if (a[3] > '5')
//             return false;
//          return true;
//    }
//    string largestTimeFromDigits(vector<int>& A) {
//       string res = "", tmp = "";
//       dfs(A, res, tmp);
//       return res;
//    }
};
