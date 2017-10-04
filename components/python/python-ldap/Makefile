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

COMPONENT_NAME=		python-ldap
COMPONENT_VERSION=	2.4.44
COMPONENT_SRC=		$(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE=	$(COMPONENT_SRC).tar.gz
COMPONENT_ARCHIVE_HASH=	\
    sha256:70ec4eb6c71c3b4f07a5c4e2ae76bb322d11019efcb04c306d87e857ea4e1841
COMPONENT_ARCHIVE_URL=	$(call pypi_url)
COMPONENT_PROJECT_URL=	http://www.python-ldap.org/
COMPONENT_BUGDB=	python-mod/python-ldap
COMPONENT_ANITYA_ID=	13261

TPNO=			29571
ASLR_MODE= $(ASLR_NOT_APPLICABLE)

PYTHON_VERSIONS := 2.7
BUILD_BITS = 32_and_64

BUILD_STYLE = setup.py
include $(WS_MAKE_RULES)/common.mk

REQUIRED_PACKAGES += library/openldap
REQUIRED_PACKAGES += library/python/pyasn1
REQUIRED_PACKAGES += library/python/pyasn1-modules
REQUIRED_PACKAGES += system/library
# REQUIRED_PACKAGES += system/network/ldap/openldap

show:
	@echo "var: $(PYTHON_VERSIONS)"
