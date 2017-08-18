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
# Copyright (c) 2016, 2017, Oracle and/or its affiliates. All rights reserved.
#

BUILD_BITS =            64_and_32
include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		pymssql
COMPONENT_VERSION=	1.0.3
COMPONENT_PROJECT_URL=	http://www.pymssql.org
COMPONENT_ARCHIVE=      $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.gz
COMPONENT_ARCHIVE_HASH=	\
	sha256:ae1048f4d53f6956b4bb9509b44ac1b179ec761eae2eef491a5a42bc73b71785
# 2.1.2	sha256:6fcfe2a1ae195396f94d19403d88b938f975371136fef16d34d89cf8ad16dcc2
# 2.1.3    sha256:afcef0fc9636fb059d8e2070978d8b66852f4046531638b12610adc634152427
COMPONENT_ARCHIVE_URL=	$(call pypi_url)

COPYRIGHT_FILE = lgpl.txt
COPYRIGHTS = LGPL2.1

include $(WS_MAKE_RULES)/prep.mk
include $(WS_MAKE_RULES)/setup.py.mk
include $(WS_MAKE_RULES)/ips.mk

ASLR_MODE = $(ASLR_NOT_APPLICABLE)

build:          $(BUILD_32_and_64)

install:          $(INSTALL_32_and_64)

test:		$(NO_TESTS)

REQUIRED_PACKAGES += library/freetds
REQUIRED_PACKAGES += library/python/setuptools-27

showvar: 
	@echo $(DOWNLOAD_SEARCH_PATH)
