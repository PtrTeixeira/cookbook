package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_rust//rust:rust.bzl", "rust_library", "rust_test")

rust_library(
    name = "parser",
    srcs = [
        "src/lib.rs",
    ],
    deps = [
        "//third-party/cargo:pest",
    ],
    proc_macro_deps = [
        "//third-party/cargo:pest_derive",
    ],
)

rust_test(
    name = "parser_test",
    crate = ":parser",
)
