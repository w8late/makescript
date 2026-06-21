#include <stdlib.h>
#include "test.h"

void TestStruct_create(struct TestStruct *ts) {
    ts->value = 42;
    ts->info.data = malloc(sizeof(4096));
}

void TestStruct_destroy(struct TestStruct *ts) {
    free(ts->info.data);
}