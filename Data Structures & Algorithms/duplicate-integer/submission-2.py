class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        setS = set()
        for num in nums:
            if num in setS:
                return True
            else:
                setS.add(num)
        return False