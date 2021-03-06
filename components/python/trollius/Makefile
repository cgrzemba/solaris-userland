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
# Copyright (c) 2015, 2019, Oracle and/or its affiliates. All rights reserved.
#

include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		trollius
COMPONENT_VERSION=	2.1
COMPONENT_SRC=		$(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE=	$(COMPONENT_SRC).tar.gz
COMPONENT_ARCHIVE_HASH=	\
    sha256:cd165d9d9578d3aadbf26e71a88d9a70c4e444792a5628dc9af255f62030cc90
COMPONENT_ARCHIVE_URL=	$(call pypi_url)
COMPONENT_PROJECT_URL=	https://github.com/haypo/trollius
COMPONENT_BUGDB=	python-mod/trollius
COMPONENT_ANITYA_ID=	4061

TPNO=			30240

# As per PSARC/2019/093, this component will soon be removed
# This component is not yet built for Python 3.7
PYTHON_VERSIONS = $(WITHOUT_PYTHON3.7)

include $(WS_MAKE_RULES)/prep.mk
include $(WS_MAKE_RULES)/setup.py.mk
include $(WS_MAKE_RULES)/ips.mk

ASLR_MODE = $(ASLR_NOT_APPLICABLE)

#
# The 2.7 tests pass but exit with an AttributeError: 'Nonetype" object has
# no attribute 'items' message due to a known issue (#33) in Python futures.
#
COMPONENT_TEST_DIR=	$(SOURCE_DIR)
COMPONENT_TEST_ARGS=	setup.py test

# common targets
build:		$(BUILD_NO_ARCH)

install:	$(INSTALL_NO_ARCH)

test:		$(TEST_NO_ARCH)
