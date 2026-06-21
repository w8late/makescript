#ifndef TEST_H
#define TEST_H

struct Info {
    char *data;
};

struct TestStruct {
    int value;
    struct Info info;
};

void TestStruct_create(struct TestStruct *);
void TestStruct_destroy(struct TestStruct *);

#endif