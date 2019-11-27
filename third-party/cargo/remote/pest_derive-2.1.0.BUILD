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


# Unsupported target "grammar" with type "test" omitted
# Unsupported target "grammar_inline" with type "test" omitted
# Unsupported target "lists" with type "test" omitted

rust_library(
    name = "pest_derive",
    crate_root = "src/lib.rs",
    crate_type = "proc-macro",
    edition = "2015",
    srcs = glob(["**/*.rs"]),
    deps = [
        "@raze__pest__2_1_2//:pest",
        "@raze__pest_generator__2_1_1//:pest_generator",
    ],
    rustc_flags = [
        "--cap-lints=allow",
    ],
    version = "2.1.0",
    crate_features = [
    ],
)

# Unsupported target "reporting" with type "test" omitted
