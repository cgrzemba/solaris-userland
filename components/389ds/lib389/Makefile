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
# Copyright (c) 2017, cgrzemba@opencsw.org
#

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		python-lib389
COMPONENT_VERSION=	1.0.4
COMPONENT_PROJECT_URL=	http://directory.fedoraproject.org
COMPONENT_ARCHIVE_HASH= \
    sha256:6b22fd9277adebd595e30ac614741d21f8df91d4e9e303c3c5fa3044609060bb
COMPONENT_ARCHIVE = $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.bz2
COMPONENT_ARCHIVE_URL=	http://releases.pagure.org/${COMPONENT_NAME:python-=}/$(COMPONENT_ARCHIVE)
COMPONENT_BUGDB=	
COMPONENT_ANITYA_ID=	

TPNO=			9999

BUILD_BITS= NO_ARCH
include ../../../make-rules/shared-macros.mk

BUILD_STYLE=setup.py

# PYTHON3_VERSIONS = 3.4
PYTHON_VERSIONS = 2.7
# PYTHON_VERSION = 3.4

include $(WS_MAKE_RULES)/common.mk

REQUIRED_PACKAGES += library/python/enum
REQUIRED_PACKAGES += library/python/nose
REQUIRED_PACKAGES += library/python/six
REQUIRED_PACKAGES += library/python/wheel
REQUIRED_PACKAGES += library/python/python-ldap
REQUIRED_PACKAGES += library/python/pysn1
REQUIRED_PACKAGES += library/python/pysn1-modules
REQUIRED_PACKAGES += library/python/pytest
REQUIRED_PACKAGES += library/python/dateutil

