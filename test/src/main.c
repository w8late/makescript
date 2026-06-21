#include <stdio.h>
#include "test.h"

int main(void) {

    struct TestStruct test;
    TestStruct_create(&test);
    printf("%d", test.value);
    TestStruct_destroy(&test);
    return 0;
}