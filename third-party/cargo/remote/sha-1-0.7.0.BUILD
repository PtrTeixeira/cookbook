"""
cargo-raze crate build file.

DO NOT EDIT! Replaced on runs of cargo-raze
"""
package(default_visibility = [
  # Public for visibility by "@raze__crate__version//" targets.
  #
  # Prefer access through "//third-party/cargo", which limits external
  # visibility to explicit Cargo.toml dependencies.
  "//visibility:public",
])

licenses([
  "notice", # "MIT,Apache-2.0"
])

load(
    "@io_bazel_rules_rust//rust:rust.bzl",
    "rust_library",
    "rust_binary",
    "rust_test",
)


# Unsupported target "lib" with type "bench" omitted
# Unsupported target "lib" with type "test" omitted
alias(
  name = "sha_1",
  actual = ":sha1",
)

rust_library(
    name = "sha1",
    crate_root = "src/lib.rs",
    crate_type = "lib",
    edition = "2015",
    srcs = glob(["**/*.rs"]),
    deps = [
        "@raze__block_buffer__0_3_3//:block_buffer",
        "@raze__byte_tools__0_2_0//:byte_tools",
        "@raze__digest__0_7_6//:digest",
        "@raze__fake_simd__0_1_2//:fake_simd",
    ],
    rustc_flags = [
        "--cap-lints=allow",
    ],
    version = "0.7.0",
    crate_features = [
    ],
)

# Unsupported target "sha1sum" with type "example" omitted
