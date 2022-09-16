def swap(a, b):
    temp = a
    a = b
    b = temp
    return a,b

def selection(arr):

    for i in range(len(arr)):
        for x in range(len(arr)):
            if arr[x+1] < len(arr):
                if arr[i] > arr[x+1]:
                    swap(arr[i], arr[x+1])

    return arr




 arr = [4, 3, 2, 9, 1, 5, 7]
 selection(arr)
 print(arr)
