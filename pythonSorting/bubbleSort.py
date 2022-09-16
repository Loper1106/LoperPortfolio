
def swap():
    return


def bubble(arr):
    
    swap = False
    h=1
    for i in range(len(arr)):
        if h < len(arr):
            if arr[i] > arr[h]:
                arr[i], arr[h] = arr[h], arr[i]
                swap = True
        h+=1

    if swap == True:
        bubble(arr)

    return arr



arr = [4, 3, 2, 9, 1, 5, 7]
bubble(arr)
print(arr)