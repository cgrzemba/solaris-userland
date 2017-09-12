#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2013, 2017, Oracle and/or its affiliates. All rights reserved.
#
include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		wheel
COMPONENT_VERSION=	0.30.0
COMPONENT_SRC=		$(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE=	$(COMPONENT_SRC).tar.gz
COMPONENT_ARCHIVE_HASH=	\
    sha256:9515fe0a94e823fd90b08d22de45d7bde57c90edce705b22f5e1ecf7e1b653c8
COMPONENT_ARCHIVE_URL=	$(call pypi_url)
COMPONENT_PROJECT_URL=	http://wheel.rtfd.org
COMPONENT_BUGDB=	python-mod/wheel
COMPONENT_ANITYA_ID=	6996

TPNO=			9999

BUILD_BITS = NO_ARCH
BUILD_STYLE = setup.py
PYTHON_VERSIONS = 2.7 3.4

include $(WS_MAKE_RULES)/common.mk

show:
	@echo "PYTHON_VERSIONS :$(PYTHON_VERSIONS)"
